package com.cz.yingpu.system.web;

import java.io.File;
import java.util.Arrays;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cz.yingpu.frame.controller.BaseController;
import com.cz.yingpu.frame.util.GlobalStatic;
import com.cz.yingpu.frame.util.MessageUtils;
import com.cz.yingpu.frame.util.Page;
import com.cz.yingpu.frame.util.ReturnDatas;
import com.cz.yingpu.system.entity.Facility;
import com.cz.yingpu.system.service.IFacilityService;

@Controller
@RequestMapping(value="/system/facility")
public class FacilityController extends BaseController{
	@Resource
	private IFacilityService facilityService;
	
	private String listurl="/facility/list";
	
	   
		/**
		 * 列表数据,调用listjson方法,保证和app端数据统一
		 * 
		 * @param request
		 * @param model
		 * @param Facility
		 * @return
		 * @throws Exception
		 */
		@RequestMapping("/list")
		public String list(HttpServletRequest request, Model model,Facility Facility) 
				throws Exception {
			if(Facility.getLevel()==null){Facility.setLevel(0);}
			ReturnDatas returnObject = listjson(request, model, Facility);
			model.addAttribute(GlobalStatic.returnDatas, returnObject);
			return listurl;
		}
		
		/**
		 * json数据,为APP提供数据
		 * 
		 * @param request
		 * @param model
		 * @param Facility
		 * @return
		 * @throws Exception
		 */
		@RequestMapping("/list/json")
		public @ResponseBody
		ReturnDatas listjson(HttpServletRequest request, Model model,Facility Facility) throws Exception{
			ReturnDatas returnObject = ReturnDatas.getSuccessReturnDatas();
			// ==构造分页请求
			Page page = newPage(request);
			// ==执行分页查询
			
			List<Facility> datas=facilityService.findListDataByFinder(null,page,Facility.class,Facility);
			returnObject.setQueryBean(Facility);
			returnObject.setPage(page);
			returnObject.setData(datas);
			return returnObject;
		}
		
		@RequestMapping("/list/export")
		public void listexport(HttpServletRequest request,HttpServletResponse response, Model model,Facility Facility) throws Exception{
			// ==构造分页请求
			Page page = newPage(request);
		
			File file = facilityService.findDataExportExcel(null,listurl, page,Facility.class,Facility);
			String fileName="Facility"+GlobalStatic.excelext;
			downFile(response, file, fileName,true);
			return;
		}
		
			/**
		 * 查看操作,调用APP端lookjson方法
		 */
		@RequestMapping(value = "/look")
		public String look(Model model,HttpServletRequest request,HttpServletResponse response)  throws Exception {
			ReturnDatas returnObject = lookjson(model, request, response);
			model.addAttribute(GlobalStatic.returnDatas, returnObject);
			return "/Facility/FacilityLook";
		}

		
		/**
		 * 查看的Json格式数据,为APP端提供数据
		 */
		@RequestMapping(value = "/look/json")
		public @ResponseBody
		ReturnDatas lookjson(Model model,HttpServletRequest request,HttpServletResponse response) throws Exception {
			ReturnDatas returnObject = ReturnDatas.getSuccessReturnDatas();
			  String  strId=request.getParameter("id");
			  Integer id=null;
			  Facility facility=new Facility();
			  if(StringUtils.isNotBlank(strId)){
				 id= Integer.valueOf(strId.trim());
				 facility = facilityService.findById(id, Facility.class);
				
			  }else{
				returnObject.setStatus(ReturnDatas.ERROR);
			  }
			 returnObject.setData(facility);
			return returnObject;
		}
		
		
		/**
		 * 新增/修改 操作吗,返回json格式数据
		 * 
		 */
		@RequestMapping("/update/json")
		public @ResponseBody
		ReturnDatas saveorupdate(Model model,Facility Facility,HttpServletRequest request,HttpServletResponse response) throws Exception{
			ReturnDatas returnObject = ReturnDatas.getSuccessReturnDatas();
			returnObject.setMessage(MessageUtils.UPDATE_SUCCESS);
			try {
			
			
				facilityService.saveorupdate(Facility);
				
			} catch (Exception e) {
				String errorMessage = e.getLocalizedMessage();
				logger.error(errorMessage);
				returnObject.setStatus(ReturnDatas.ERROR);
				returnObject.setMessage(MessageUtils.UPDATE_ERROR);
			}
			return returnObject;
		
		}
		
		/**
		 * 进入修改页面,APP端可以调用 lookjson 获取json格式数据
		 */
		@RequestMapping(value = "/update/pre")
		public String updatepre(Model model,HttpServletRequest request,HttpServletResponse response)  throws Exception{
			ReturnDatas returnObject = lookjson(model, request, response);
			model.addAttribute(GlobalStatic.returnDatas, returnObject);
			return "/Facility/FacilityCru";
		}
		
		/**
		 * 删除操作
		 */
		@RequestMapping(value="/delete/json")
		public @ResponseBody ReturnDatas delete(HttpServletRequest request) throws Exception {

				// 执行删除
			try {
			  String  strId=request.getParameter("id");
			  Integer id=null;
			  if(StringUtils.isNotBlank(strId)){
				 id= Integer.valueOf(strId.trim());
					facilityService.deleteById(id,Facility.class);
					return new ReturnDatas(ReturnDatas.SUCCESS,
							MessageUtils.DELETE_SUCCESS);
				} else {
					return new ReturnDatas(ReturnDatas.WARNING,
							MessageUtils.DELETE_WARNING);
				}
			} catch (Exception e) {
				logger.error(e.getMessage(), e);
			}
			return new ReturnDatas(ReturnDatas.WARNING, MessageUtils.DELETE_WARNING);
		}
		/**
		 * 删除多条记录
		 * 
		 */
		@RequestMapping("/delete/more")
		public @ResponseBody
		ReturnDatas deleteMore(HttpServletRequest request, Model model) {
			String records = request.getParameter("records");
			if(StringUtils.isBlank(records)){
				 return new ReturnDatas(ReturnDatas.ERROR,
						MessageUtils.DELETE_ALL_FAIL);
			}
			String[] rs = records.split(",");
			if (rs == null || rs.length < 1) {
				return new ReturnDatas(ReturnDatas.ERROR,
						MessageUtils.DELETE_NULL_FAIL);
			}
			try {
				List<String> ids = Arrays.asList(rs);
				facilityService.deleteByIds(ids,Facility.class);
			} catch (Exception e) {
				return new ReturnDatas(ReturnDatas.ERROR,
						MessageUtils.DELETE_ALL_FAIL);
			}
			return new ReturnDatas(ReturnDatas.SUCCESS,
					MessageUtils.DELETE_ALL_SUCCESS);
			
			
		}

}

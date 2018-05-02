package com.cz.yingpu.system.pc;

import javax.annotation.Resource;
import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.cz.yingpu.frame.util.ReturnDatas;
import com.cz.yingpu.system.entity.Seo;
import com.cz.yingpu.system.service.ISeoService;

@Controller
@RequestMapping(value="/pc/main")
public class MainController {
	@Resource
	private ISeoService seoService;
	
	@RequestMapping("/index")
	public String index(Model model,HttpServletRequest req,HttpServletResponse resp){
		try {
		  ReturnDatas returnDatas=new ReturnDatas(ReturnDatas.SUCCESS);
		  Seo seo= 	seoService.findById(1, Seo.class);
		  returnDatas.setData(seo);
		  model.addAttribute("data", returnDatas);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "pc/main/index";
	}
	

}

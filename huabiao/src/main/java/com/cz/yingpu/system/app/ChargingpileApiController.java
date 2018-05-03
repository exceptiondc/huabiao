package com.cz.yingpu.system.app;

import java.math.BigDecimal;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.cz.yingpu.frame.controller.BaseController;
import com.cz.yingpu.frame.util.CalculationUtil;
import com.cz.yingpu.frame.util.Finder;
import com.cz.yingpu.frame.util.Page;
import com.cz.yingpu.frame.util.ReturnDatas;
import com.cz.yingpu.system.entity.Chargingpile;
import com.cz.yingpu.system.service.IChargingPileService;
import com.sun.star.lang.NullPointerException;

@Controller
@RequestMapping(value="/app/chargingPile")
public class ChargingpileApiController extends BaseController{
	
	
	@Resource
	private IChargingPileService chargingPileService;
	
	@RequestMapping("/list/json")
	@ResponseBody
	public ReturnDatas listjson(Chargingpile chargingpile,HttpServletRequest request,String range){
		Page page=newPage(request);
		ReturnDatas returnDatas=new ReturnDatas(ReturnDatas.SUCCESS);
		double latitude=Double.parseDouble( chargingpile.getLatitude());
		double longitude=Double.parseDouble(chargingpile.getLongitude());
		 //先计算查询点的经纬度范围
        double r = 6371;//地球半径千米
        double dis = 500;
		try {
			dis = CalculationUtil.divide(Double.parseDouble(range), 1000.00);
		} catch (NumberFormatException | NullPointerException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}//0.5千米距离
        double dlng =  2*Math.asin(Math.sin(dis/(2*r))/Math.cos(latitude*Math.PI/180));
        dlng = dlng*180/Math.PI;//角度转为弧度
        double dlat = dis/r;
        dlat = dlat*180/Math.PI;        
        double minlat =latitude-dlat;
        double maxlat = latitude+dlat;
        double minlng = longitude -dlng;
        double maxlng = longitude + dlng;
		Finder finder=new Finder("select * from t_charging_pile where longitude>=:minlng and longitude <=:maxlng and latitude>=:minlat and latitude<=:maxlat");
		finder.setParam("minlng", minlng);
		finder.setParam("maxlng", maxlng);
		finder.setParam("minlat", minlat);
		finder.setParam("maxlat", maxlat);
	//	System.out.println(minlat+"-"+maxlat+"-"+minlng+"-"+maxlng+"-");
        try {
			List<Chargingpile> list=   chargingPileService.queryForList(finder, Chargingpile.class, page);
			returnDatas.setData(list);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return returnDatas;
	}
}

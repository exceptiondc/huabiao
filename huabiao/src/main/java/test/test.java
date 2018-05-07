package test;

import java.io.File;
import java.io.IOException;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.apache.commons.httpclient.HttpClient;

import jxl.Cell;

import com.cz.yingpu.frame.util.ExcelUtils;


public class test {
	/*
	 * 请求url获得所有相应软件的所有评论
	 */
	public static void login() throws Exception {

		HttpHelper helper = new HttpHelper();
		Map<String, String> params = new HashMap<String, String>();

		/*system/sms/send/json*/
//		params.put("phone","18538068965");
//		params.put("type","1");

		/*appuser/register*/
//		params.put("phone","18538068965");
//		params.put("password","123456");
//		params.put("code","44903");

//		params.put("phone","18538068965");
//		params.put("password","123456");
//		params.put("type","1");
//		params.put("token","8g5N6UCMvP7WJQ4c");

//		params.put("id","1");
//		params.put("money","10100000");

		/*userproject/update/json*/
//		params.put("userId","1");
//		params.put("projectId","1");
//		params.put("money","101000");
//		params.put("osType","ios");

//		params.put("id","1");

//		params.put("realName","啦啦啦啦");
//		params.put("phone","18538068965");
//		params.put("job","啦啦啦啦");
//		params.put("nativePlace","啦啦啦啦");
//		params.put("resident","啦啦啦啦");
//		params.put("userId","82");
//		params.put("ps","啦啦啦啦啦啦啦啦啦啦啦啦");

//		params.put("userId","112");
//		params.put("month","2017-06");

		params.put("userId","130");
		params.put("projectId","118");
		params.put("money","100");
		params.put("osType","Android");

		HttpRespons res;
		try {
			res = helper.sendPost(

//					"http://localhost/yingpu/app/appuser/appWebRech/json",
					"http://localhost:8080/yingpu/app/userproject/getInterest/json",
					
					params);
			System.out.println(res.content);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	
	static void testCallback() {
		HttpHelper helper = new HttpHelper();
		Map<String, String> params = new HashMap<String, String>();

		params.put("mchnt_cd", "0001000F0342510");
		params.put("mchnt_txn_ssn","2017111509471063760");
		params.put("login_id","18710929273");
		params.put("resp_code","1059");
		params.put("resp_desc","WTF");
		params.put("amt","9999");

		HttpRespons res;
		try {
			res = helper.sendPost(
					"http://localhost:8080/yingpu/system/fuiouResp/chongzhiRsp/json",
					params);
			System.out.println(res.content);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	
	static void readExcel() throws Exception {
		String sql = "INSERT INTO t_fy_status_code(`code`, descr, info) VALUES('%s','%s','%s');";
		List<Cell[]> cellList = ExcelUtils.getExcle(new File("D:\\文件\\文档（桌面）\\返回码详细说明v0.12.xls"));
		for (Cell[] cells : cellList) {
			String c1 = cells[0].getContents();
			String c2 = cells[1].getContents();
			String c3 = cells[2].getContents();
//			String childArea = cells[3].getContents();
//			if (!idSet.contains(code)) {
//				idSet.add(code);
//				System.out.println(String.format(sql, code, province, "0"));
//			}
			System.out.println(String.format(sql, c1.trim(), c2.trim(), c3.trim()));
		}
		
		
	}
	

	public static void main(String args[]) throws Exception {
		
	//	https://wechat-ant.chargerlink.com/ant/api/user/antLoginWithPwd
		HttpHelper helper = new HttpHelper();
		Map<String, String> params = new HashMap<String, String>();

		HttpRespons res;
		try {
			res = helper.sendPost(
					"https://wechat-ant.chargerlink.com/ant/api/user/antLoginWithPwd",
					params);
			System.out.println(res.content);
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
	
	
}


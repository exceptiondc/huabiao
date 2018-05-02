package com.cz.yingpu.frame.shiro;

import org.apache.shiro.web.filter.authc.UserFilter;
import org.springframework.stereotype.Component;

/**
 * pc用户的 过滤器，主要设置登陆界面
 * @author caomei
 *
 */


@Component("frontuser")
public class FrontUserFilter extends UserFilter {
	
	public FrontUserFilter(){
		//跳转到登录界面
		System.out.println(">>>>>>>>>>>>>>>");
		super.setLoginUrl("/main/index");
	}

}

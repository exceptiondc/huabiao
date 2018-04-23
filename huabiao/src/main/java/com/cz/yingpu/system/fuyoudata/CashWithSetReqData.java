package com.cz.yingpu.system.fuyoudata;

import java.io.Serializable;

/**
 * 用户提现模式请求参数类
 * @author aj
 *
 */
public class CashWithSetReqData implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private String mchnt_cd = "";
	private String mchnt_txn_ssn = "";
	private String login_id = "";
	private String cash_way = "";
	private String signature = "";
	
	public String getMchnt_cd() {
		return mchnt_cd;
	}
	public void setMchnt_cd(String mchnt_cd) {
		this.mchnt_cd = mchnt_cd;
	}
	public String getMchnt_txn_ssn() {
		return mchnt_txn_ssn;
	}
	public void setMchnt_txn_ssn(String mchnt_txn_ssn) {
		this.mchnt_txn_ssn = mchnt_txn_ssn;
	}
	public String getLogin_id() {
		return login_id;
	}
	public void setLogin_id(String login_id) {
		this.login_id = login_id;
	}
	public String getCash_way() {
		return cash_way;
	}
	public void setCash_way(String cash_way) {
		this.cash_way = cash_way;
	}
	public String getSignature() {
		return signature;
	}
	public void setSignature(String signature) {
		this.signature = signature;
	}

	/**
	 * 生成客户请求平台的注册验签数据
	 * @return
	 */
	public String createSignValue(){
		String src = cash_way+"|"+login_id+"|"+mchnt_cd+"|"+mchnt_txn_ssn;
		System.out.println("用户提现模式签名明文>>>>"+src);
		return src;
	}
}

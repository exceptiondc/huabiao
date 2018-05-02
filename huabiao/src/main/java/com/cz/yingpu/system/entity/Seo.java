package com.cz.yingpu.system.entity;

import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;

import com.cz.yingpu.frame.annotation.WhereSQL;
import com.cz.yingpu.frame.entity.BaseEntity;
/**
 * TODO 在此加入类描述
 * @copyright {@link 9iu.org}
 * @author springrain<Auto generate>
 * @version  2017-03-21 15:09:43
 * @see com.cz.yingpu.system.entity.Seo
 */
@Table(name="t_seo")
public class Seo  extends BaseEntity {
	
	private static final long serialVersionUID = 1L;

	//alias
	/*
	public static final String TABLE_ALIAS = "站内公告表";
	public static final String ALIAS_ID = "id";
	public static final String ALIAS_ICON = "图标";
	public static final String ALIAS_TITLE = "标题";
	public static final String ALIAS_DESCR = "公告描述";
	public static final String ALIAS_CONTENT = "公告内容";
	public static final String ALIAS_CREATETIME = "时间";
    */
	//date formats
	//public static final String FORMAT_CREATETIME = DateUtils.DATETIME_FORMAT;
	
	//columns START
	/**
	 * id
	 */
	private java.lang.Integer id;
	
	private String title;
	
	@Id
	@WhereSQL(sql="id=:id")
	public java.lang.Integer getId() {
		return id;
	}

	public void setId(java.lang.Integer id) {
		this.id = id;
	}
	@WhereSQL(sql="title=:title")
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}
	@WhereSQL(sql="keywords=:keywords")
	public String getKeywords() {
		return keywords;
	}

	public void setKeywords(String keywords) {
		this.keywords = keywords;
	}
	@WhereSQL(sql="description=:description")
	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	private String keywords;
	
	private String description;
}

	

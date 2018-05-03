package com.cz.yingpu.system.entity;

import javax.persistence.Id;
import javax.persistence.Table;

import com.cz.yingpu.frame.annotation.WhereSQL;
import com.cz.yingpu.frame.entity.BaseEntity;

@Table(name="t_charging_pile ")
public class Chargingpile extends BaseEntity{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	private Integer id;
	
	private String name;
	
	private String longitude;
	
	private String latitude;

	@Id
	@WhereSQL(sql="id=:id")
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	@WhereSQL(sql="name=:name")
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	@WhereSQL(sql="longitude=:longitude")
	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}
	@WhereSQL(sql="latitude=:latitude")
	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}
}

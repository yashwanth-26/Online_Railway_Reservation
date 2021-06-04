package com.train.details.model;

import java.util.Date;

import javax.persistence.Id;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.format.annotation.DateTimeFormat;

@Document(collection = "TRAIN_DETAILS")
public class TrainDetailsModel {

	@Id
	private int id;
	private int trainNumber;
	private String trainName;
	private String trainFrom;
	private String trainTo;

//	@DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
//	private Date travelDate = new Date();

	public TrainDetailsModel() {
	}

	public TrainDetailsModel(int id, int trainNumber, String trainName, String trainFrom, String trainTo) {
		super();
		this.id = id;
		this.trainNumber = trainNumber;
		this.trainName = trainName;
		this.trainFrom = trainFrom;
		this.trainTo = trainTo;
		// this.travelDate = travelDate;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getTrainNumber() {
		return trainNumber;
	}

	public void setTrainNumber(int trainNumber) {
		this.trainNumber = trainNumber;
	}

	public String getTrainName() {
		return trainName;
	}

	public void setTrainName(String trainName) {
		this.trainName = trainName;
	}

	public String getTrainFrom() {
		return trainFrom;
	}

	public void setTrainFrom(String trainFrom) {
		this.trainFrom = trainFrom;
	}

	public String getTrainTo() {
		return trainTo;
	}

	public void setTrainTo(String trainTo) {
		this.trainTo = trainTo;
	}

//	public Date getTravelDate() {
//		return travelDate;
//	}
//
//	public void setTravelDate(Date travelDate) {
//		this.travelDate = travelDate;
//	}

}

package com.train.details.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.train.details.model.TrainDetailsModel;
import com.train.details.repositories.TrainDetailsRepository;

@RestController
@RequestMapping("api/trainDetailsService")
@CrossOrigin(origins = "http://localhost:4200")
public class TrainDetailsController {

	@Autowired
	TrainDetailsRepository trainDetailsRepository;

	@GetMapping("/getTrainDetails")
	public List<TrainDetailsModel> getTrainDetails() {
		return this.trainDetailsRepository.findAll();
	}

//	@GetMapping("/addStaticRecord")
//	public void insertRecord() {
//		List<TrainDetailsModel> trainDetailsModelList = new ArrayList<TrainDetailsModel>();
//		TrainDetailsModel trainDetailsModelOne = new TrainDetailsModel(1, 1020, "Andhra Express", "Amaravathi",
//				"Hyderabad");
//		TrainDetailsModel trainDetailsModelTwo = new TrainDetailsModel(2, 2030, "Telangana Express", "Secendrabad",
//				"Vijayawada");
//		trainDetailsModelList.add(trainDetailsModelOne);
//		trainDetailsModelList.add(trainDetailsModelTwo);
//		this.trainDetailsRepository.save(trainDetailsModelList);
//		System.out.println("#### Records added successfully ####");
//	}

	@PostMapping("/addTrains")
	public TrainDetailsModel insertTrains(@RequestBody TrainDetailsModel trainDetailsModel) {
		TrainDetailsModel tdm = this.trainDetailsRepository.save(trainDetailsModel);
		System.out.println("#### Records added successfully ####");
		return tdm;
	}
	

}

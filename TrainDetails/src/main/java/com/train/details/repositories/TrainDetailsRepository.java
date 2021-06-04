package com.train.details.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.train.details.model.TrainDetailsModel;

//@Repository	
public interface TrainDetailsRepository extends MongoRepository<TrainDetailsModel, Long>{

}

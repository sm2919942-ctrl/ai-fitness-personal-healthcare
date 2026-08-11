package com.aifitness.healthcare.controller;

import com.aifitness.healthcare.entity.UserHealthProfile;
import com.aifitness.healthcare.repository.UserHealthProfileRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/profile")
@CrossOrigin(origins = "http://localhost:5173")
public class UserHealthProfileController {

    private final UserHealthProfileRepository repository;

    public UserHealthProfileController(
            UserHealthProfileRepository repository
    ) {
        this.repository = repository;
    }


    @PostMapping
    public ResponseEntity<UserHealthProfile> saveProfile(
            @RequestBody UserHealthProfile profile
    ) {

        UserHealthProfile saved =
                repository.save(profile);

        return ResponseEntity.ok(saved);
    }


    @GetMapping
    public ResponseEntity<List<UserHealthProfile>> getProfiles() {

        return ResponseEntity.ok(
                repository.findAll()
        );
    }


    @GetMapping("/{id}")
    public ResponseEntity<UserHealthProfile> getProfile(
            @PathVariable Long id
    ) {

        return repository
                .findById(id)
                .map(ResponseEntity::ok)
                .orElse(
                        ResponseEntity
                                .notFound()
                                .build()
                );
    }
    @PutMapping("/{id}")
    public ResponseEntity<UserHealthProfile> updateProfile(
            @PathVariable Long id,
            @RequestBody UserHealthProfile updatedProfile
    ) {

        return repository.findById(id)
                .map(existing -> {

                    existing.setName(updatedProfile.getName());
                    existing.setAge(updatedProfile.getAge());
                    existing.setGender(updatedProfile.getGender());
                    existing.setHeight(updatedProfile.getHeight());
                    existing.setWeight(updatedProfile.getWeight());
                    existing.setTargetWeight(updatedProfile.getTargetWeight());
                    existing.setGoal(updatedProfile.getGoal());
                    existing.setDietType(updatedProfile.getDietType());
                    existing.setWorkoutTime(updatedProfile.getWorkoutTime());
                    existing.setWaterGoal(updatedProfile.getWaterGoal());
                    existing.setStepGoal(updatedProfile.getStepGoal());
                    existing.setSleepGoal(updatedProfile.getSleepGoal());

                    UserHealthProfile saved =
                            repository.save(existing);

                    return ResponseEntity.ok(saved);

                })
                .orElse(
                        ResponseEntity.notFound().build()
                );
    }
}
package com.aifitness.healthcare.controller;

import com.aifitness.healthcare.entity.DietPlan;
import com.aifitness.healthcare.repository.DietPlanRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/diet")
@CrossOrigin(origins = "http://localhost:5173")
public class DietPlanController {

    private final DietPlanRepository repository;

    public DietPlanController(DietPlanRepository repository) {
        this.repository = repository;
    }


    @PostMapping
    public ResponseEntity<DietPlan> saveDietPlan(
            @RequestBody DietPlan dietPlan
    ) {

        DietPlan saved =
                repository.save(dietPlan);

        return ResponseEntity.ok(saved);
    }


    @GetMapping("/profile/{profileId}")
    public ResponseEntity<DietPlan> getLatestDietPlan(
            @PathVariable Long profileId
    ) {

        return repository
                .findTopByProfileIdOrderByGeneratedAtDesc(profileId)
                .map(ResponseEntity::ok)
                .orElse(
                        ResponseEntity.notFound().build()
                );
    }
}

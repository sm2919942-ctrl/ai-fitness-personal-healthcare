package com.aifitness.healthcare.repository;

import com.aifitness.healthcare.entity.DietPlan;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DietPlanRepository extends JpaRepository<DietPlan, Long> {

    Optional<DietPlan> findTopByProfileIdOrderByGeneratedAtDesc(Long profileId);
}

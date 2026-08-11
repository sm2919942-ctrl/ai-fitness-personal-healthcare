package com.aifitness.healthcare.repository;

import com.aifitness.healthcare.entity.UserHealthProfile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserHealthProfileRepository
        extends JpaRepository<UserHealthProfile, Long> {
}

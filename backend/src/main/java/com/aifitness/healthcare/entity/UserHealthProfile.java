package com.aifitness.healthcare.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "user_health_profiles")
public class UserHealthProfile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Integer age;

    private String gender;

    private Double height;

    private Double weight;

    private Double targetWeight;

    private String goal;

    private String dietType;

    private String workoutTime;

    private Integer waterGoal;

    private Integer stepGoal;

    private Integer sleepGoal;
}

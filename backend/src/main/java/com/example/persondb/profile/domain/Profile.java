package com.example.persondb.profile.domain;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
public class Profile {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    private String korName;
    private String engName;
    private String category;

    private String enneagram;
    private String mbti;
    private String birthday;

    @Builder
    public Profile(String korName, String engName, String category, String enneagram, String mbti, String birthday) {
        this.korName = korName;
        this.engName = engName;
        this.category = category;
        this.enneagram = enneagram;
        this.mbti = mbti;
        this.birthday = birthday;
    }
}

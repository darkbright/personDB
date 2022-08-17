package com.example.persondb.profile;

import com.example.persondb.profile.domain.Profile;
import com.example.persondb.profile.infrastructure.ProfileRepository;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.Objects;

@Component
public class ProfileDataInitializer implements ApplicationRunner {
    private final ProfileRepository profileRepository;

    public ProfileDataInitializer(ProfileRepository profileRepository) {
        this.profileRepository = Objects.requireNonNull(profileRepository);
    }

    @Override
    public void run(ApplicationArguments args) {
        Profile profile = Profile.builder()
                .korName("장원영")
                .engName("Jang Wonyoung")
                .imageUrl("https://www.me-u.co.kr/data/profile/thumb-profile_1809_190x190.jpg")
                .birthday("2004-08-31")
                .category("가수")
                .enneagram("3w2")
                .mbti("ESFP")
                .build();
        profileRepository.save(profile);

        profile = Profile.builder()
                .korName("박은빈")
                .engName("Park Eunbin")
                .imageUrl("https://www.me-u.co.kr/data/profile/thumb-profile_1190_190x190.png")
                .birthday("1992-09-04")
                .category("배우")
                .enneagram("9w1")
                .mbti("INFP")
                .build();
        profileRepository.save(profile);
    }
}

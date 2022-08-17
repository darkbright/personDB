package com.example.persondb.profile.infrastructure;

import com.example.persondb.profile.domain.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ProfileRepository extends JpaRepository<Profile, Long> {

    List<Profile> findAll();

    Optional<Profile> findById(Long id);

    Profile save(Profile profile);

    void delete(Profile profile);
}

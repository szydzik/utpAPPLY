package pl.edu.utp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.edu.utp.model.User;

import java.util.Optional;


public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}

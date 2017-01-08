package pl.edu.utp.service;

import pl.edu.utp.dto.UserDTO;
import pl.edu.utp.model.User;

import java.util.Optional;

public interface UserService extends org.springframework.security.core.userdetails.UserDetailsService {

    User update(User user, UserDTO params);
    Optional<User> findUser(Long id);
    User createUser(UserDTO userDTO);

}
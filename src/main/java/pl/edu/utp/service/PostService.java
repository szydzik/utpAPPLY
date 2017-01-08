package pl.edu.utp.service;

import pl.edu.utp.model.Post;

import java.util.List;


public interface PostService {
    List<Post> findAll();
    Post findOnePostById(Long id);
    void save(Post post);
    void deletePostById(Long id);
}

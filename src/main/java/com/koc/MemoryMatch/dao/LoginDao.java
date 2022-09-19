package com.koc.MemoryMatch.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.koc.MemoryMatch.models.User;


@Repository
public interface LoginDao extends JpaRepository<User, Long>{
}

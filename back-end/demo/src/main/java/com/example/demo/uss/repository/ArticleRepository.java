package com.example.demo.uss.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.uss.domain.Article;

interface ArticleCustomRepository{}
public interface ArticleRepository extends JpaRepository<Article, Long>, ArticleCustomRepository{

}

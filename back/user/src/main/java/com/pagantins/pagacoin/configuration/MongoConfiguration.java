package com.pagantins.pagacoin.configuration;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;

@Configuration
public class MongoConfiguration extends AbstractMongoClientConfiguration {

    @Value("${spring.data.mongodb.uri}")
    private String uri;
    @Value("${spring.data.mongodb.database}")
    private String database;
    @Override
    public MongoClient mongoClient() {
        return MongoClients.create(uri);
    }

    @Override
    protected String getDatabaseName() {
        return database;
    }

}

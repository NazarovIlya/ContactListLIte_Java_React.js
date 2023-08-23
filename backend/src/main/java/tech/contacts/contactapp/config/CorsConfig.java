package tech.contacts.contactapp.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import tech.contacts.contactapp.entity.Contact;
import tech.contacts.contactapp.env.Settings;

@Configuration
public class CorsConfig
    implements RepositoryRestConfigurer {

  @Override
  public void configureRepositoryRestConfiguration(
      RepositoryRestConfiguration config,
      CorsRegistry cors) {

    config.exposeIdsFor(Contact.class);

    cors.addMapping(config.getBasePath() + "/**")
        .allowedOrigins(Settings.getHOST())
        .allowedMethods("GET", "POST", "DELETE")
        .allowCredentials(true);

  }
}

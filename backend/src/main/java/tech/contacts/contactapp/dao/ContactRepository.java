package tech.contacts.contactapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.contacts.contactapp.entity.Contact;

public interface ContactRepository
    extends JpaRepository<Contact, Long> {

}

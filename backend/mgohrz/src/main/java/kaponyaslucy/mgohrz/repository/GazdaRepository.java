package kaponyaslucy.mgohrz.repository;

import kaponyaslucy.mgohrz.model.Gazda;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface GazdaRepository extends JpaRepository<Gazda,Integer> {

}
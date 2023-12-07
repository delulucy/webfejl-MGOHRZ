package kaponyaslucy.mgohrz.repository;

import kaponyaslucy.mgohrz.model.Hazikedvenc;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface HazikedvencRepository extends JpaRepository<Hazikedvenc,Integer> {

}
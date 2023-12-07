package kaponyaslucy.mgohrz.Service;

import kaponyaslucy.mgohrz.model.Gazda;

import java.util.List;

public interface GazdaService {
        List<Gazda> findAll();
        Gazda findById(Integer id);
        Gazda createGazda(Gazda gazda);
        Gazda updateGazda(Integer id, Gazda newGazdaInfo);
        void deleteGazda(Integer id);
        void deleteAllGazda();
    }

package kaponyaslucy.mgohrz.Service.impl;

import kaponyaslucy.mgohrz.Service.GazdaService;
import kaponyaslucy.mgohrz.model.Gazda;
import kaponyaslucy.mgohrz.repository.GazdaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GazdaServiceImpl implements GazdaService {
    @Autowired
    GazdaRepository gazdaRepository;

    @Override
    public List<Gazda> findAll() {
        List<Gazda> entities = gazdaRepository.findAll();
        return entities;
    }

    @Override
    public Gazda findById(Integer id) {
        Gazda entity = gazdaRepository.findById(id).get();
        return entity;
    }

    @Override
    public Gazda createGazda(Gazda newGazda){
        return gazdaRepository.save(newGazda);
    }

    @Override
    public Gazda updateGazda(Integer id, Gazda newGazdaInfo){
        Gazda oldGazda = gazdaRepository.findById(id).get();

        oldGazda.setName(newGazdaInfo.getName());
        oldGazda.setCity(newGazdaInfo.getCity());

        return gazdaRepository.save(oldGazda);
    }

    @Override
    public void deleteGazda(Integer id){
        Gazda gazda = gazdaRepository.findById(id).get();

        gazdaRepository.delete(gazda);
    }

    @Override
    public void deleteAllGazda(){
        gazdaRepository.deleteAll();
    }
}

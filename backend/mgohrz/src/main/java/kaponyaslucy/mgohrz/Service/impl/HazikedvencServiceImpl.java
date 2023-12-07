package kaponyaslucy.mgohrz.Service.impl;

import kaponyaslucy.mgohrz.Service.HazikedvencService;
import kaponyaslucy.mgohrz.model.Gazda;
import kaponyaslucy.mgohrz.model.Hazikedvenc;
import kaponyaslucy.mgohrz.repository.GazdaRepository;
import kaponyaslucy.mgohrz.repository.HazikedvencRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HazikedvencServiceImpl implements HazikedvencService {
    @Autowired
    HazikedvencRepository hazikedvencRepository;

    @Autowired
    GazdaRepository gazdaRepository;


    @Override
    public List<Hazikedvenc> findAll() {
        List<Hazikedvenc> entities = hazikedvencRepository.findAll();
        return entities;
    }

    @Override
    public Hazikedvenc findById(Integer id) {
        Hazikedvenc entity = hazikedvencRepository.findById(id).get();
        return entity;
    }

    @Override
    public Hazikedvenc createHazikedvenc(Hazikedvenc newHazikedvenc, Integer gazdaId){
        Gazda gazda =  gazdaRepository.findById(gazdaId).get();
        newHazikedvenc.setGazda(gazda);
        return hazikedvencRepository.save(newHazikedvenc);
    }

    @Override
    public Hazikedvenc updateHazikedvenc(Integer id, Hazikedvenc newHazikedvencInfo){
        Hazikedvenc oldHazikedvenc = hazikedvencRepository.findById(id).get();

        oldHazikedvenc.setName(newHazikedvencInfo.getName());
        oldHazikedvenc.setFaj(newHazikedvencInfo.getFaj());
        oldHazikedvenc.setKor(newHazikedvencInfo.getKor());

        return hazikedvencRepository.save(newHazikedvencInfo);
    }

    @Override
    public void deleteHazikedvenc(Integer id){
        Hazikedvenc entity = hazikedvencRepository.findById(id).get();

        hazikedvencRepository.delete(entity);
    }

    @Override
    public void deleteAllHazikedvenc(){
        hazikedvencRepository.deleteAll();
    }

}

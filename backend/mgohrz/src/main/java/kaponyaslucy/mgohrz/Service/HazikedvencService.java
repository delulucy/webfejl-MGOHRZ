package kaponyaslucy.mgohrz.Service;

import kaponyaslucy.mgohrz.model.Hazikedvenc;

import java.util.List;

public interface HazikedvencService {
    List<Hazikedvenc> findAll();
    Hazikedvenc findById(Integer id);
    Hazikedvenc createHazikedvenc(Hazikedvenc hazikedvenc, Integer gazdaId);
    Hazikedvenc updateHazikedvenc(Integer id, Hazikedvenc newHazikedvencinfo);
    void deleteHazikedvenc(Integer id);
    void deleteAllHazikedvenc();
}
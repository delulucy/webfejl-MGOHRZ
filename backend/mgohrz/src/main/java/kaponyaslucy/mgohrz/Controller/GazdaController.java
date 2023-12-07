package kaponyaslucy.mgohrz.Controller;

import kaponyaslucy.mgohrz.Service.GazdaService;
import kaponyaslucy.mgohrz.model.Gazda;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:4200/")
public class GazdaController {

    private GazdaService gazdaService;

    @Autowired
    public GazdaController(GazdaService gazdaService) {
        this.gazdaService = gazdaService;
    }

    @GetMapping("gazda")
    public ResponseEntity<List<Gazda>> getGazda() {
        return ResponseEntity.ok(gazdaService.findAll());
    }

    @GetMapping("gazda/{id}")
    public Gazda gazdaDetail(@PathVariable int id) {
        return gazdaService.findById(id);
    }

    @PostMapping("gazda/create")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Gazda> createGazda(@RequestBody Gazda gazda) {
        return new ResponseEntity<>(gazdaService.createGazda(gazda), HttpStatus.CREATED);
    }

    @PutMapping("gazda/{id}/update")
    public ResponseEntity<Gazda> updateGazda(@RequestBody Gazda gazda, @PathVariable("id") int gazdaId) {
        gazdaService.updateGazda(gazdaId, gazda);
        return ResponseEntity.ok(gazda);
    }

    @DeleteMapping("gazda/{id}/delete")
    public ResponseEntity<HttpStatus> deleteGazda(@PathVariable("id") int gazdaId) {
        gazdaService.deleteGazda(gazdaId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("gazda/deleteAll")
    public ResponseEntity<HttpStatus> deleteAllGazda() {
        gazdaService.deleteAllGazda();
        return new ResponseEntity<>(HttpStatus.OK);
    }

}

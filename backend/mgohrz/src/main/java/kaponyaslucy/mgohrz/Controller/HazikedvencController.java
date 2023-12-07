package kaponyaslucy.mgohrz.Controller;

import kaponyaslucy.mgohrz.Service.HazikedvencService;
import kaponyaslucy.mgohrz.model.Hazikedvenc;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins = "http://localhost:4200/")
public class HazikedvencController {

    private HazikedvencService hazikedvencService;

    @Autowired
    public HazikedvencController(HazikedvencService hazikedvencService) {
        this.hazikedvencService= hazikedvencService;
    }

    @GetMapping("hazikedvenc")
    public ResponseEntity<List<Hazikedvenc>> getHazikedvenc() {
        return ResponseEntity.ok(hazikedvencService.findAll());
    }

    @GetMapping("hazikedvenc/{id}")
    public Hazikedvenc hazikedvencDetail(@PathVariable int id) {
        return hazikedvencService.findById(id);
    }

    @PostMapping("hazikedvenc/create/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Hazikedvenc> createHazikedvenc(@RequestBody Hazikedvenc hazikedvenc, @PathVariable("id") int gazdaId) {
        return new ResponseEntity<>(hazikedvencService.createHazikedvenc(hazikedvenc, gazdaId), HttpStatus.CREATED);
    }

    @PutMapping("hazikedvenc/{id}/update")
    public ResponseEntity<Hazikedvenc> updateHazikedvenc(@RequestBody Hazikedvenc hazikedvenc, @PathVariable("id") int hazikedvencId) {
        hazikedvencService.updateHazikedvenc(hazikedvencId, hazikedvenc);
        return ResponseEntity.ok(hazikedvenc);
    }

    @DeleteMapping("hazikedvenc/{id}/delete")
    public ResponseEntity<HttpStatus> deleteHazikedvenc(@PathVariable("id") int hazikedvencId) {
        hazikedvencService.deleteHazikedvenc(hazikedvencId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("hazikedvenc/deleteAll")
    public ResponseEntity<HttpStatus> deleteHazikedvenc() {
        hazikedvencService.deleteAllHazikedvenc();
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

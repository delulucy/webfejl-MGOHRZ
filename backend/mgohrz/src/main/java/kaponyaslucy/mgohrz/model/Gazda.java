package kaponyaslucy.mgohrz.model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name = "GAZDA")
public class Gazda {
    @Id
    @GeneratedValue
    private int id;
    @Column(name = "NEV")
    private String name;

    @Column(name = "LAKHELY")
    private String city;

    @OneToMany(mappedBy = "gazda",cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Hazikedvenc> hazikedvencek = new ArrayList<>();

    public Gazda() {
    }

    public Gazda(int id, String name, String city) {
        this.id = id;
        this.name = name;
        this.city = city;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public List<Hazikedvenc> getHazikedvencek() {
        return hazikedvencek;
    }

    public void setHazikedvencek(List<Hazikedvenc> hazikedvencek) {
        this.hazikedvencek = hazikedvencek;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Gazda that = (Gazda) o;
        return id == that.id && name.equals(that.name) && city.equals(that.city) && hazikedvencek.equals(that.hazikedvencek);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, city, hazikedvencek);
    }

    @Override
    public String toString() {
        return "Orokbefogado{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", city='" + city + '\'' +
                ", hazikedvencek=" + hazikedvencek +
                '}';
    }
}

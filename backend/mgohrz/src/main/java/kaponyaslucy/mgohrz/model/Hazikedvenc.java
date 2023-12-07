package kaponyaslucy.mgohrz.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "HAZIKEDVENC")
public class Hazikedvenc {
    @Id
    @GeneratedValue
    private int id;
    @Column(name = "NAME")
    private String name;
    @Column(name = "FAJ")
    private String faj;
    @Column(name = "KOR")
    private int kor;
    @ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name = "GAZDA_ID")
    @JsonIgnore
    private Gazda gazda;

    public Hazikedvenc() {
    }

    public Hazikedvenc(int id, String name, String faj, int kor) {
        this.id = id;
        this.name = name;
        this.faj = faj;
        this.kor = kor;
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

    public String getFaj() {
        return faj;
    }

    public void setFaj(String faj) {
        this.faj = faj;
    }

    public int getKor() {
        return kor;
    }

    public void setKor(int kor) {
        this.kor = kor;
    }

    public Gazda getGazda() {
        return gazda;
    }

    public void setGazda(Gazda gazda) {
        this.gazda = gazda;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Hazikedvenc that = (Hazikedvenc) o;
        return id == that.id && kor == that.kor && name.equals(that.name) && faj.equals(that.faj) && gazda.equals(that.gazda);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, faj, kor, gazda);
    }

    @Override
    public String toString() {
        return "Hazikedvenc{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", faj='" + faj + '\'' +
                ", kor=" + kor +
                ", gazda=" + gazda +
                '}';
    }
}
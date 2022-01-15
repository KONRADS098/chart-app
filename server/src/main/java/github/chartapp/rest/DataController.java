package github.chartapp.rest;

import github.chartapp.models.Data;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
@RequestMapping("/data")
public class DataController {

    public DataController() {

    }

    @GetMapping()
    public List<Data> getAnswers(@RequestParam(value = "filter", required = false) String filter) {
        List<Data> schools = List.of(
                new Data(0, 10, "School 1",LocalDate.of(2022, 1, 12)),
                new Data(0, 16, "School 1",LocalDate.of(2023, 1, 12)),
                new Data(0, 22, "School 2",LocalDate.of(2022, 1, 13)),
                new Data(0, 30, "School 2",LocalDate.of(2023, 1, 13)),
                new Data(0, 40, "School 3",LocalDate.of(2022, 1, 15)),
                new Data(0, 60, "School 3",LocalDate.of(2023, 1, 15)),
                new Data(0, 80, "School 4",LocalDate.of(2022, 1, 14)),
                new Data(0, 13, "School 4",LocalDate.of(2023, 1, 14)),
                new Data(0, 91, "School 5",LocalDate.of(2022, 1, 19)),
                new Data(0, 13, "School 5",LocalDate.of(2023, 1, 19))
        );

        List<Data> classes = List.of(
                new Data(0, 13, "Class 1",LocalDate.of(2022, 1, 12)),
                new Data(0, 19, "Class 1",LocalDate.of(2023, 1, 12)),
                new Data(0, 48, "Class 2",LocalDate.of(2022, 2, 13)),
                new Data(0, 23, "Class 2",LocalDate.of(2023, 2, 13)),
                new Data(0, 20, "Class 3",LocalDate.of(2022, 3, 14)),
                new Data(0, 33, "Class 3",LocalDate.of(2023, 3, 14)),
                new Data(0, 50, "Class 4",LocalDate.of(2022, 4, 15)),
                new Data(0, 72, "Class 4",LocalDate.of(2023, 4, 15)),
                new Data(0, 78, "Class 5",LocalDate.of(2022, 5, 16)),
                new Data(0, 91, "Class 5",LocalDate.of(2023, 5, 16))
        );

        List<Data> groups = List.of(
                new Data(0, 80, "Group 1",LocalDate.of(2022, 1, 12)),
                new Data(0, 99, "Group 1",LocalDate.of(2023, 1, 12)),
                new Data(0, 11, "Group 2",LocalDate.of(2022, 2, 13)),
                new Data(0, 23, "Group 2",LocalDate.of(2023, 2, 13)),
                new Data(0, 50, "Group 3",LocalDate.of(2022, 3, 14)),
                new Data(0, 67, "Group 3",LocalDate.of(2023, 3, 14)),
                new Data(0, 88, "Group 4",LocalDate.of(2022, 4, 15)),
                new Data(0, 98, "Group 4",LocalDate.of(2023, 4, 15)),
                new Data(0, 17, "Group 5",LocalDate.of(2022, 5, 16)),
                new Data(0, 33, "Group 5",LocalDate.of(2023, 5, 16))
        );

        List<Data> all = Stream.of(schools, classes, groups)
                .flatMap(Collection::stream)
                .collect(Collectors.toList());

        switch (filter) {
            case "Schools": return schools;
            case "Classes": return classes;
            case "Groups": return groups;
            default: return all;
        }

    }

}

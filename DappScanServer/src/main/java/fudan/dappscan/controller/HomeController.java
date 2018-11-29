package fudan.dappscan.controller;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import fudan.dappscan.beans.DappInfo;
import fudan.dappscan.services.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class HomeController {

    private MainService mainService;

    @Autowired
    public HomeController(MainService mainService) {
        this.mainService = mainService;
    }

    @RequestMapping("/getDappList")
    public List<DappInfo> getDappList() {
        return mainService.getDappList();
    }

    @RequestMapping("/test/{address}")
    public JsonObject test(Model model, @PathVariable(value = "address") String address) throws IOException {
        return mainService.getTransactionsByAddress(address);
    }

    @RequestMapping("/getDappsAmountByMonth")
    public List<List<Long>> getDappsAmountByMonth() {
        return mainService.getDappsAmountByMonth();
    }


}

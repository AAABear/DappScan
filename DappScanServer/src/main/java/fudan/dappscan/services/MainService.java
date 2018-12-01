package fudan.dappscan.services;

import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParser;
import fudan.dappscan.beans.DappInfo;
import javafx.util.Pair;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.HttpStatus;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.HttpClients;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

@Service
public class MainService {

    private final String balanceTemplate = "https://api.etherscan.io/api?module=account&action=balance&address=%s&tag=latest";


    public List<DappInfo> getDappList() {
        List<DappInfo> dappList = new LinkedList<>();
        for (int i = 0; i < 5; ++i) {
            dappList.add(new DappInfo());
        }

        return dappList;
    }

    public JsonObject getTransactionsByAddress(String address) throws IOException {
        HttpClient client = HttpClients.createDefault();

        HttpGet httpGet = new HttpGet(String.format(balanceTemplate, address));
        HttpResponse httpResponse = client.execute(httpGet);
        if (httpResponse.getStatusLine().getStatusCode() == HttpStatus.SC_OK) {
            HttpEntity entity = httpResponse.getEntity();

            JsonParser parser = new JsonParser();
            return parser.parse(new InputStreamReader(entity.getContent())).getAsJsonObject();
        }

        return null;
    }

    public List<List<Long>> getDappsAmountByMonth() {
        List<List<Long>> result = new LinkedList<>();
        long start = 1370131200000L;
        for (int i = 0; i < 800; ++i) {
            List<Long> tmp = new LinkedList<>();
            tmp.add(start + i * 86400000L);
            tmp.add((long)(Math.random() * 1000));
            result.add(tmp);
        }
        return result;
    }

}

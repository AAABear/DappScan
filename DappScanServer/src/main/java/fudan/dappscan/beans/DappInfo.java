package fudan.dappscan.beans;

public class DappInfo {
    private String name;
    private String balance;
    private String totalUser;
    private ChangeRate userChangeRate;
    private String totalVolumes;
    private ChangeRate volumeChangeRate;
    private String totalTxs;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBalance() {
        return balance;
    }

    public void setBalance(String balance) {
        this.balance = balance;
    }

    public String getTotalUser() {
        return totalUser;
    }

    public void setTotalUser(String totalUser) {
        this.totalUser = totalUser;
    }

    public ChangeRate getUserChangeRate() {
        return userChangeRate;
    }

    public void setUserChangeRate(ChangeRate userChangeRate) {
        this.userChangeRate = userChangeRate;
    }

    public String getTotalVolumes() {
        return totalVolumes;
    }

    public void setTotalVolumes(String totalVolumes) {
        this.totalVolumes = totalVolumes;
    }

    public ChangeRate getVolumeChangeRate() {
        return volumeChangeRate;
    }

    public void setVolumeChangeRate(ChangeRate volumeChangeRate) {
        this.volumeChangeRate = volumeChangeRate;
    }

    public String getTotalTxs() {
        return totalTxs;
    }

    public void setTotalTxs(String totalTxs) {
        this.totalTxs = totalTxs;
    }
}

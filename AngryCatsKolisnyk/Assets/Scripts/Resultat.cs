using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class Resultat : MonoBehaviour
{
    float curlvltime = 0;
    [SerializeField] TextMeshProUGUI txt;
    [SerializeField] GameObject panlka;
    [SerializeField] TextMeshProUGUI resultt;
    [SerializeField] TextMeshProUGUI starr;
    [SerializeField] Button nextlvl;
    [SerializeField] Button menub;
    private void Start()
    {
        panlka.SetActive(false);
    }
    private void Tick()
    {

        curlvltime += 0.1f;
        txt.SetText(string.Format("{0:N1} s", curlvltime));
        
    }
    public void StartWatch()
    {
        InvokeRepeating(nameof(Tick),0f,0.1f);
    }
    public void stopwatch()
    {
        CancelInvoke();
    }
    public void saveResult()
    {
        stopwatch();
        panlka.SetActive(true);
        int startc = 0;
        if(curlvltime<10)
        {
            startc = 5;
        }
        else if (curlvltime <20)
        {
            startc = 4;
        }
        else if (curlvltime < 40)
        {
            startc = 3;
        }
        else if (curlvltime < 100)
        {
            startc = 2;
        }
        else if (curlvltime < 300)
        {
            startc =1;
        }
        resultt.SetText($"Час:{curlvltime}");
        starr.SetText($"Зірки:{startc}");
        float bestscore = PlayerPrefs.GetFloat("Best");
        if(curlvltime<bestscore)
        {
            PlayerPrefs.SetFloat("Best",curlvltime);
            resultt.SetText($"New record:{curlvltime}");

        }
        else
        {
            resultt.SetText($"Too slow!");
        }
        Time.timeScale =0;
        nextlvl.GetComponentInChildren<TextMeshProUGUI>().SetText("Next");
        menub.GetComponentInChildren<TextMeshProUGUI>().SetText("Menu");
        nextlvl.onClick.AddListener(nextlvll);
        menub.onClick.AddListener(gotomenu);
    }
    public void nextlvll()
    {
        int currlvl = SceneManager.GetActiveScene().buildIndex + 1;
        int maxlvl = SceneManager.sceneCount;
        if(useGUILayout=currlvl==maxlvl)
        {
            SceneManager.LoadScene(0);

        }
        else
        {
            SceneManager.LoadScene(currlvl);
        }
    }
    public void gotomenu()
    {
        SceneManager.LoadScene(0);
    }

    public void lose()
    {
        stopwatch();
        panlka.SetActive(true);
        int startc = 0;
        resultt.SetText($"Час:{curlvltime}");
        starr.SetText($"Зірки:{startc}");
        resultt.SetText($"LOl,tu ne proysHow!");
        Time.timeScale = 0;
        nextlvl.GetComponentInChildren<TextMeshProUGUI>().SetText("Next");
        menub.GetComponentInChildren<TextMeshProUGUI>().SetText("Menu");
        nextlvl.onClick.AddListener(nextlvll);
        menub.onClick.AddListener(gotomenu);
    }
}
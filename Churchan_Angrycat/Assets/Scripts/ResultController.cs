using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class ResultController : MonoBehaviour
{

    float currentLevelTime = 0;
    [SerializeField] TextMeshProUGUI timeText;
    [SerializeField] GameObject resultPanel;
    [SerializeField] TextMeshProUGUI timeresulttext;
    [SerializeField] TextMeshProUGUI startresulttext;

    [SerializeField] GameObject NextLevelButton;
    [SerializeField] GameObject MenuButton;


    private void Tick()
    {
        currentLevelTime += 0.1f;
        timeText.SetText(string.Format("{0:N1} s", currentLevelTime));
    }

    public void StartWatch()
    {
        InvokeRepeating(nameof(Tick), 0f, 0.1f);
    }

    public void StopWatch()
    {
        CancelInvoke();
    }

    public void SaveResult()
    {
        StopWatch();
        resultPanel.SetActive(true);
        int startCount = 0;
        if(currentLevelTime < 10)
        {
            startCount = 5;
        }else if(currentLevelTime < 20)
        {
            startCount = 4;
        }
        else if (currentLevelTime < 40)
        {
            startCount = 3;
        }
        else if (currentLevelTime < 100)
        {
            startCount = 2;
        }
        else 
        {
            startCount = 1;
        }
        startresulttext.SetText("Star:" + startCount.ToString());
        startresulttext.SetText($"Star: + {startCount}");
        float BestScore = PlayerPrefs.GetFloat("BestScore");
        if(currentLevelTime < BestScore)
        {
            PlayerPrefs.SetFloat("BestScore", currentLevelTime);
            timeresulttext.SetText($"New record {currentLevelTime}");
        }
        else
        {
            timeresulttext.SetText($"Too slow!");
        }

        Time.timeScale = 0;
        NextLevelButton.GetComponentInChildren<TextMeshProUGUI>()
            .SetText("Next Level");
        NextLevelButton.GetComponent<Button>().onClick.AddListener(GoToNextLevel);
        MenuButton.GetComponent<Button>().onClick.AddListener(GoToMenu);

    }

    public void GoToNextLevel()
    {
        int currentLevel = SceneManager.GetActiveScene().buildIndex;
        int maxlevel = SceneManager.sceneCountInBuildSettings;
        if(currentLevel == maxlevel)
        {
            SceneManager.LoadScene(0);
        }
        else
        {
            SceneManager.LoadScene(currentLevel + 1);
        }
    }
    public void GoToMenu()
    {
        SceneManager.LoadScene(0);
    }

    public void LoseResult()
    {
        StopWatch();
        resultPanel.SetActive(true);
        int startCount = 0;
        startresulttext.SetText("Star:" + startCount.ToString());
        float BestScore = PlayerPrefs.GetFloat("BestScore");


            timeresulttext.SetText($"tu tutututututututuuttututuututtuututututtuututtututuut loh");
        

        Time.timeScale = 0;
        NextLevelButton.GetComponentInChildren<TextMeshProUGUI>()
            .SetText("Next Level");


        NextLevelButton.GetComponent<Button>().onClick.AddListener(GoToNextLevel);
        MenuButton.GetComponent<Button>().onClick.AddListener(GoToMenu);

    }
}

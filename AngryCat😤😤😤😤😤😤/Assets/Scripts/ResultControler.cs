using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.SceneManagement;
using UnityEngine.UI;


public class ResultControler : MonoBehaviour
{
    public float currentLevelTime = 0;
    [SerializeField] TextMeshProUGUI timeText;
    [SerializeField] GameObject resultPanel;
    [SerializeField] TextMeshProUGUI timeResultText;
    [SerializeField] TextMeshProUGUI startResultText;

    private void Awake()
    {
        Time.timeScale = 1;
    }
        



    [SerializeField] GameObject MenuButton;
    [SerializeField] GameObject NextLevelButton;

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

    public void LoseResult()
    {
        StopWatch();
        resultPanel.SetActive(true);
        int starCount = 0;
        startResultText.SetText("Star: " + starCount.ToString());
        float BestScore = PlayerPrefs.GetFloat("BestScore");
            timeResultText.SetText($"Нажаль ти не пройшов :) !");
        Time.timeScale = 0;
        NextLevelButton.GetComponentInChildren<TextMeshProUGUI>()
            .SetText("RestartLevel");
        NextLevelButton.GetComponent<Button>().onClick.AddListener(GoToNextLevel);
        MenuButton.GetComponent<Button>().onClick.AddListener(GoToMenu);
    }

    public void SaveResult()
    {
        StopWatch();
        resultPanel.SetActive(true);
        int starCount = 0;
        if (currentLevelTime < 10)
        {
            starCount = 5;
        }
        else if (currentLevelTime < 20)
        {
            starCount = 4;
        }
        else if (currentLevelTime < 40)
        {
            starCount = 3;
        }
        else if (currentLevelTime < 100)
        {
            starCount = 2;
        }
        else
        {
            starCount = 1;
        }
        startResultText.SetText("Star: " + starCount.ToString());
        int crl = SceneManager.GetActiveScene().buildIndex;
        startResultText.SetText($"Star: {starCount}");
        float BestScore = PlayerPrefs.GetFloat("BestScore" + crl);
        if(BestScore == 0)
        {
            PlayerPrefs.SetFloat("BestScore" + crl, 1488);
        }
        if (currentLevelTime < BestScore)
        {
            PlayerPrefs.SetFloat("BestScore" + crl, currentLevelTime);
            timeResultText.SetText($"New record {currentLevelTime}");
        }
        else
        {
            timeResultText.SetText($"Too slow!");
        }
        Time.timeScale = 0;
        NextLevelButton.GetComponentInChildren<TextMeshProUGUI>()
            .SetText("Next Level");
        NextLevelButton.GetComponent<Button>().onClick.AddListener(RestartLevel);
        MenuButton.GetComponent<Button>().onClick.AddListener(GoToMenu);
        MenuButton.GetComponentInChildren<TextMeshProUGUI>().SetText("Go to Gaiti");
    }

    public void GoToNextLevel()
    {
        int currentLevel = SceneManager.GetActiveScene().buildIndex;
        int maxLevel = SceneManager.sceneCountInBuildSettings;
        if(currentLevel == maxLevel)
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

    void RestartLevel()
    {
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);
    }
   
}






































































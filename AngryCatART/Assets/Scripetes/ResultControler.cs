using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class ResultControler: MonoBehaviour
{
    float currentLevelTime = 0;
    [SerializeField] TextMeshProUGUI timeText;
    [SerializeField] GameObject resultPanel;
    [SerializeField] TextMeshProUGUI timeResultText;
    [SerializeField] TextMeshProUGUI starResultTime;

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
        int starCount = 0;
        if (currentLevelTime < 20)
        {
            starCount = 5;
        } else if (currentLevelTime < 30)
        {
            starCount = 4;
        }
        else if (currentLevelTime < 40)
        {
            starCount = 3;
        }
        else if (currentLevelTime < 50)
        {
            starCount = 2;
        }
        else if (currentLevelTime < 60)
        {
            starCount = 1;
        }
        starResultTime.SetText("Star: " + starCount.ToString());
        starResultTime.SetText($"Star:  { starCount}");
        float BestScore = PlayerPrefs.GetFloat("BestScore");
        if (currentLevelTime < BestScore)
        {
            PlayerPrefs.SetFloat("BestScore", currentLevelTime);
            timeResultText.SetText($"New record{currentLevelTime}");
        }
        else
        {
            timeResultText.SetText($"Too slow!");
        }
        Time.timeScale = 0;
        NextLevelButton.GetComponentInChildren<TextMeshProUGUI>().SetText("Next Level");
        NextLevelButton.GetComponent<Button>().onClick.AddListener(GoToNextLevel);
        NextLevelButton.GetComponent<Button>().onClick.AddListener(GoToMenu);
    }

    public void GoToNextLevel()
    {
        int currentLevel = SceneManager.GetActiveScene().buildIndex;
        int maxLevel = SceneManager.sceneCountInBuildSettings;
        if (currentLevel == maxLevel)
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
    public void loseeResult()
    {
        StopWatch();
        resultPanel.SetActive(true);
        int starCount = 0;
        starResultTime.SetText("Star: " + starCount.ToString());
        timeResultText.SetText($"pomeeeeeeeeeeeeeeeeeeer!");
        Time.timeScale = 0;
        NextLevelButton.GetComponentInChildren<TextMeshProUGUI>().SetText("RestartLevel");
        NextLevelButton.GetComponent<Button>().onClick.AddListener(GoToNextLevel);
        NextLevelButton.GetComponent<Button>().onClick.AddListener(GoToMenu);
    } 
}

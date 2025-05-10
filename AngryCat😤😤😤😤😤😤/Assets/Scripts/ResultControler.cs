using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;
using UnityEngine.SceneManagement;
using UnityEngine.UI;


public class ResultControler : MonoBehaviour
{
    float currentLevelTime = 0;
    [SerializeField] TextMeshProUGUI timeText;
    [SerializeField] GameObject resultPanel;
    [SerializeField] TextMeshProUGUI timeResultText;
    [SerializeField] TextMeshProUGUI startResultText;
    

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
            timeResultText.SetText($"Ти ніщій ахаахахаахаххахахахах!");
        Time.timeScale = 0;
        NextLevelButton.GetComponentInChildren<TextMeshProUGUI>()
            .SetText("RestartLevel");
        NextLevelButton.GetComponent<Button>().onClick.AddListener(GoToNextLevel);
        MenuButton.GetComponent<Button>().onClick.AddListener(GoToMenu);
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
}
}

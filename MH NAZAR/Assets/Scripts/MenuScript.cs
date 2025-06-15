using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;
using TMPro;

public class MenuScript : MonoBehaviour
{
    [SerializeField] GameObject button1;
    [SerializeField] GameObject button2;
    [SerializeField] GameObject panel;
    [SerializeField] GameObject grid;
    [SerializeField] GameObject levelButton;

    public void  OpenSelectMenu()
    {
        button1.SetActive(false);
        button2.SetActive(false);
        panel.SetActive(true);
    }

    public void CloseSelectMenu()
    {
        button1.SetActive(true);
        button2.SetActive(true);
        panel.SetActive(false);
    }

    public void Exit()
    {
        Application.Quit();
    }

    private void Start()
    {
        int sceneCount = SceneManager.sceneCount;
        for (int i = 1; i <= sceneCount; i++)
        {
            GameObject b = Instantiate(levelButton, grid.transform);
            b.transform.GetChild(0).GetComponent<TextMeshProUGUI>()
                .SetText($"Level {i}");
            b.GetComponent<Button>().onClick.AddListener(() => StartLevel(i - 1));
            float record = PlayerPrefs.GetFloat("BestScore" + (i + 1));
            b.transform.GetChild(1).GetComponent<TextMeshProUGUI>()
                .SetText(string.Format("{0:N1} s", record));
            
        }
    }

    void StartLevel(int n)
    {
        SceneManager.LoadScene(n);
    }

}

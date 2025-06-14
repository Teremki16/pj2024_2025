using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class MenuControler : MonoBehaviour
{
    [SerializeField] Button NextLevelButton;
    [SerializeField] Button Level2;
    void Start()
    {
        NextLevelButton.onClick.AddListener(GoToLevel1);
        Level2.onClick.AddListener(GoToLevel2);
    }
    void Update()
    {
        
    }
    public void GoToLevel1()
    {
        SceneManager.LoadScene(1);

    }
    public void GoToLevel2()
    {
        SceneManager.LoadScene(2);

    }
}

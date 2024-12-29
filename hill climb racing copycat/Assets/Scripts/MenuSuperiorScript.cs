using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class MenuSuperiorScript : MonoBehaviour
{
    [SerializeField] GameObject[] buttons;
    public int currentLevel = 1;
    void Start()
    {
        currentLevel = PlayerPrefs.GetInt("currentLevel");
        if(currentLevel == 0)
        {
            currentLevel = 1;
            PlayerPrefs.SetInt("currentLevel", 1);
        }
        for(int i = 0; i < currentLevel; i++)
        {
            buttons[i].GetComponent<Button>().interactable = true;
        }
    }

    void Update()
    {
        
    }

    public void Level(int number)
    {
        SceneManager.LoadScene(number);
    }
}

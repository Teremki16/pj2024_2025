using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement

public class MenuControler : MonoBehaviour
{ 
    public void NewGame()
    {
        SceneManager.LoadScene(1);
    }

    public void Settings()
    {
        SceneManager.LoadScene(2);
    }
    public void Exit()
    {
        Application.Quit()
    }


}


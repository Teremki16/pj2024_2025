using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class Gamemanager : MonoBehaviour
{
    // Start is called before the first frame update
    public void openscene(int sce)
    {
        SceneManager.LoadScene(sce);
    }
}

using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class HealthScrit : MonoBehaviour
{
    [SerializeField] int health = 3;
    [SerializeField] Image hpbar;
    [SerializeField] Sprite[] imgs;
    private void Start()
    {
        hpbar.sprite = imgs[health];
    }
    public void damage(Vector3 enemypos)
    {
        Vector3 impuls = transform.position - enemypos;
        impuls = impuls.normalized;
        GameObject.Find("Player").transform.Translate(impuls*0.5f);
        health--;
        hpbar.sprite = imgs[health];
        if(health<=0)
        {
            SceneManager.LoadScene(0);
        }
    }
}

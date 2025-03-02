using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.UI;

public class HealthScript : MonoBehaviour
{
    [SerializeField] int health = 3;
    [SerializeField] Image healthBar;
    [SerializeField] Sprite[] sprites;

    private void Start()
    {
        healthBar.sprite = sprites[health];
    }

    public void Damage(Vector3 enemyPosition)
    {
        Vector3 impuls = transform.position - enemyPosition;
        impuls = impuls.normalized;
        GameObject.Find("Player").transform.Translate(impuls * 0.5f);
        health--;
        healthBar.sprite = sprites[health];
        if(health <= 0)
        {
            SceneManager.LoadScene(0);
        }
    } 
}

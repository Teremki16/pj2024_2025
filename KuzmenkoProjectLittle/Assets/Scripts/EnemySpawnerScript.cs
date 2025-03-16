using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemySpawnerScript : MonoBehaviour
{
    [SerializeField] GameObject enemy;

    IEnumerator Spawn()
    {
        while (true)
        {
            Instantiate(enemy, transform.position, Quaternion.identity);
            float delay = Random.Range(1, 5f);
            yield return new WaitForSeconds(delay);
        }
    }

    private void Start()
    {
        StartCoroutine("Spawn");
    }
}
